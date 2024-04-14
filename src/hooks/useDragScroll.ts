import useThrottle from '@/hooks/useThrottle';
import { MouseEvent, RefObject, useCallback, useState } from 'react';

type DraggableHook = {
  onMouseDown: (e: MouseEvent) => void;
  onMouseMove: (e: MouseEvent) => void;
  onMouseUp: (e: MouseEvent) => void;
  onMouseLeave: (e: MouseEvent) => void;
};

export const useDraggable = (scrollerRef: RefObject<HTMLElement>): DraggableHook => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [totalX, setTotalX] = useState<number>(0);

  const preventUnexpectedEffects = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDragStart = (e: MouseEvent) => {
    preventUnexpectedEffects(e);
    setIsDragging(true);
    const x = e.clientX;
    setStartX(x);
    if (scrollerRef.current && 'scrollLeft' in scrollerRef.current) {
      setTotalX(x + scrollerRef.current.scrollLeft);
    }
  };

  const onDragEnd = (e: MouseEvent) => {
    if (!isDragging) return;
    if (!scrollerRef.current) return;

    setIsDragging(false);

    const endX = e.clientX;
    const childNodes = [...(scrollerRef.current?.childNodes || [])] as HTMLElement[];
    const dragDiff = Math.abs(startX - endX);

    if (dragDiff > 10) {
      childNodes.forEach((child) => {
        child.addEventListener('click', preventUnexpectedEffects as any);
      });
    } else {
      childNodes.forEach((child) => {
        child.removeEventListener('click', preventUnexpectedEffects as any);
      });
    }
  };

  const onDragMove = useThrottle((e: MouseEvent) => {
    if (!isDragging) return;
    preventUnexpectedEffects(e);
    const scrollLeft = totalX - e.clientX;

    if (scrollerRef.current && 'scrollLeft' in scrollerRef.current) {
      scrollerRef.current.scrollLeft = scrollLeft;
    }
  }, 10);

  return {
    onMouseDown: onDragStart,
    onMouseMove: onDragMove,
    onMouseUp: onDragEnd,
    onMouseLeave: onDragEnd,
  };
};
