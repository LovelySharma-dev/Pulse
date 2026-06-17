import React from "react";

const BorderAnimatedContainer = ({ children }) => {
  return (
    <div className="w-full h-full [background:linear-gradient(45deg,#09090b,theme(colors.zinc.900)_50%,#09090b)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.700/.48)_80%,theme(colors.violet.500)_86%,theme(colors.emerald.400)_90%,theme(colors.violet.500)_94%,theme(colors.zinc.700/.48))_border-box] rounded-2xl border border-transparent animate-border flex overflow-hidden">
  {children}
</div>
  );
};

export default BorderAnimatedContainer;
