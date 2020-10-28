import "./DownloadForm.css";
import React from "react";

export default function DownloadForm({ href, children }) {
  return (
    <form className="DownloadForm" method={"get"} action={href}>
      {children}
    </form>
  );
}
