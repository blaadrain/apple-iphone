export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps,
) => {
  timeline.to(rotationRef.current.rotation, {
    x: rotationState[0],
    y: rotationState[1],
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(firstTarget, { ...animationProps, ease: "power2.inOut" }, "<");

  timeline.to(secondTarget, { ...animationProps, ease: "power2.inOut" }, "<");
};
