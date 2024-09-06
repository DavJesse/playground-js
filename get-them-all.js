export const getArchitects = () => {
  const architects = Array.from(document.getElementsByTagName('a'));
  const nonArchitects = Array.from(document.getElementsByTagName('span'));
  return [architects, nonArchitects];
};

export const getClassical = () => {
    const classical = Array.from(document.getElementsByClassName('classical'));
    const nonClassical = Array.from(document.querySelectorAll('.modern', '.baroque'));
    return [classical, nonClassical];
};

export const getActive = () => {
    const activeClassical = Array.from(document.getElementsByClassName('active'));
    const nonActiveClassical = Array.from(document.querySelectorAll('a:not(.active), span:not(.active)'));
    return [activeClassical, nonActiveClassical];
};

export const getBonannoPisano = () => {
    const Bonanno = document.getElementById('BonannoPisano');
    const restActiveClassical = Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'));
    return [Bonanno, restActiveClassical]
};