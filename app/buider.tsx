
"use client"

import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import { Suspense } from "react";
import { RenderBuilderContent } from "@/components/builder";

builder.init("406d1519eec3489ab76bedcaf2910259");

async function fetchFooterContent(urlPath: string) {

  const model = "footer";
  try {
    const content = await builder
      .get(model, {
        userAttributes: {
          urlPath,
        },
        prerender: false,
      })
      .toPromise();
    return <RenderBuilderContent content={content} model={model} />;
  } catch (error) {
    console.error("Failed to fetch footer content", error);
    return <p>Failed to load Footer.</p>;
  }
}

export function Footer() {
  const [footerContent, setFooterContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const urlPath = window.location.pathname || '/';
    fetchFooterContent(urlPath).then((content) => {
      setFooterContent(content);
    });
  }, []);

  if (!footerContent) {
    return <p>Loading Footer...</p>;
  }

  return (
    <Suspense fallback={<p>Loading Footer...</p>}>
      {footerContent}
    </Suspense>
  );
}
