import { motion } from "framer-motion";

interface HamburgerIconProps {
  isOpen: boolean;
}

export default function HamburgerIcon({ isOpen }: HamburgerIconProps) {
  const variant = isOpen ? "opened" : "closed";
  
  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 45,
      translateY: 9
    }
  };
  
  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };
  
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -45,
      translateY: -9
    }
  };

  const lineClasses = "h-[2px] w-8 bg-foreground origin-left transform transition-transform duration-300";
  
  return (
    <div className="flex flex-col gap-[7px] items-start justify-center">
      <motion.div
        className={lineClasses}
        variants={top}
        animate={variant}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={lineClasses}
        variants={center}
        animate={variant}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={lineClasses}
        variants={bottom}
        animate={variant}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
