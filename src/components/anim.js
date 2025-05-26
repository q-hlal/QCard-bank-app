export const showUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export const childAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: {  duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, 
    },
  },
};

export const secondAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.2, 
      delayChildren: 0.3,
    },
  },
};

export const thierdAnimation = {
  hidden: {
    backgroundColor: "rgba(0,0,0,0)", 
    opacity : 0,
  },
  visible: {
    backgroundColor: "#000000", 
    opacity : 1,
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const buttonNavBarAniamtion = {
  hidden: {
    scale : 0, 
    opacity : 0,
  },
  visible: {
    scale : 1, 
    opacity : 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
   exit: {
    scale : 0, 
    opacity : 0,
  }
};

export const navBarAniamtion = {
  hidden: {
    y : -1000, 
    opacity : 0,
  },
  visible: {
    y : 0, 
    opacity : 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
   exit: {
    y : -1000, 
    opacity : 0,
  }
};


export const preloderText1 = {
  hidden: {
    y: -100,
    opacity : 0,

  },
  visible: {
    y: 0,
    opacity : 1,
    transition: {
    delay: 8, 
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      delay: 0.1, 
      duration: 0.5,
    },
  },
};

export const preloderText2 = {
  hidden: {
    y: 100,
    opacity : 0,
  },
  visible: {
    y: 0,
    opacity : 1,
    transition: {
      delay: 8, 
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
    },
  },
};

export const divider = {
  hidden: {
    height: '0%',
  },
  visible: {
    height: '100%',
    transform: "translateY(0%)",
    transition: {
      delay: 8.5, 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    height: '0%',
    transform: "translateY(-100%)",
    transition: {
      delay: 0.5,
      duration: 0.2,
    },
  },
};


export const spinerHide = {
   initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      delay: 7.8,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const screenSplitTop = {
  initial: {},
  animate: {
    transform: "translateY(0%)",
    height: "100%",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit:{
    transform: "translateY(-100%)",
    height: "0%",
    transition: {
    delay: 1,
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  },
}};

export const screenSplitBottom = {
  initial: {},
  animate: {
    transform: "translateY(0%)",
    height: "100%",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    transform: "translateY(100%)",
    height: "0%",
    transition: {
      delay: 1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};



