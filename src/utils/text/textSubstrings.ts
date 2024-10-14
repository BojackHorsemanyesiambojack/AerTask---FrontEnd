export const checkDesc = (desc: string | undefined) => {
    if (desc !== undefined)
      return desc.length > 45 ? desc.substring(0, 45) + "..." : desc;
  };
