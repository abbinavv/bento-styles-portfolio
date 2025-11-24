"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import type { CardData, CardCategory } from "@/lib/types";
import { reorder } from "@/lib/reorder";

interface BentoGridProps {
  cards: CardData[];
  activeFilter: CardCategory;
}

export function BentoGrid({ cards, activeFilter }: BentoGridProps) {
  const parentRef = useRef<HTMLDivElement>(null);
  
  // Store cards in state for reordering
  const [items, setItems] = useState(cards);

  // Filter cards based on active filter
  const visibleCards = items.filter(
    (card) => activeFilter === "All" || card.category === activeFilter
  );

  const getSizeClass = (size: string) => {
    switch (size) {
      case "2x1":
        return "span-2x1";
      case "1x2":
        return "span-1x2";
      case "2x2":
        return "span-2x2";
      default:
        return "span-1";
    }
  };

  // Handle drag end and reorder cards
  const onDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: { point: { x: number; y: number } }, index: number) => {
    // Calculate new position based on drag distance
    const cardHeight = 250; // Approximate card height
    const newIndex = Math.round(info.point.y / cardHeight);
    const clampedIndex = Math.min(Math.max(newIndex, 0), items.length - 1);
    
    // Only reorder if position changed
    if (clampedIndex !== index) {
      const reordered = reorder(items, index, clampedIndex);
      setItems(reordered);
    }
  };

  // Container animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={parentRef}
      layout
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="bento-grid w-full max-w-6xl mx-auto px-4 pt-10 lg:pt-16 pb-16"
      transition={{
        layout: { duration: 0.5, ease: "easeInOut" }
      }}
    >
      <AnimatePresence mode="popLayout">
        {visibleCards.map((card, index) => (
          <motion.div
            key={card.id}
            layoutId={card.id}
            layout
            variants={cardVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            drag
            dragConstraints={parentRef}
            dragElastic={0.05}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            onDragEnd={(e, info) => onDragEnd(e, info, index)}
            whileDrag={{ scale: 1.03, zIndex: 10 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`${getSizeClass(card.size)} cursor-grab active:cursor-grabbing`}
            style={{ 
              zIndex: 1,
            }}
            transition={{
              layout: { 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              },
            }}
          >
            <card.component />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
