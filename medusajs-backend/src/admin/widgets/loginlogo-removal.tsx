import { useEffect } from "react";
import type { WidgetConfig } from "@medusajs/admin";

const LoginCustomizationsWidget = () => {
  useEffect(() => {
    document
      .querySelectorAll(".mb-large")
      .forEach((DOMnode) => DOMnode.remove());
  }, []);

  return <p className="text-center">custom stuff</p>;
};

export const config: WidgetConfig = {
  zone: "login.before",
};

export default LoginCustomizationsWidget;
