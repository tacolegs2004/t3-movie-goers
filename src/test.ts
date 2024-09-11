import React from "react";

type DropEvent = DragEvent & { dataTransfer: DataTransfer | null };

export const usePageDropzone = (onFilesDropped: (files: File[]) => void) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const dragCounter = React.useRef(0);

  const handleDrag = React.useCallback((event: DropEvent) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const handleDragIn = React.useCallback((event: DropEvent) => {
    event.preventDefault();
    event.stopPropagation();
    dragCounter.current++;

    if (event.dataTransfer?.items && event.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragOut = React.useCallback((event: DropEvent) => {
    event.preventDefault();
    event.stopPropagation();
    dragCounter.current--;

    if (dragCounter.current === 0) {
      setIsDragging(false);

      if (event.dataTransfer?.files) {
        onFilesDropped(Array.from(event.dataTransfer.files));
      }
    }
  }, []);
};
