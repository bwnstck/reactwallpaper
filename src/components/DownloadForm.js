import "./DownloadForm.css";
import React from "react";

export default function DownloadForm({ href, children, target }) {
  return (
    <form className="DownloadForm" method={"get"} action={href} target={target}>
      {children}
    </form>
  );
}
