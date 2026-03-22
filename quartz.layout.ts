import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
//  header: [],
  header: [Component.PageTitle()],
  afterBody: [],
  footer: Component.Footer({
  links: {},
}),  
 
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
 //   Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
 // Component.Darkmode(), // 2026-02-18 - Disabled dark mode toggle (light-only blog)
        { Component: Component.ReaderMode() },
      ],
    }),
//    Component.Explorer(),
//	Component.RecentNotes({ title: "Latest", limit: 5 }),
   Component.DesktopOnly(Component.RecentNotes({ title: "Latest", limit: 5 })),
  ],
  right: [
 //   Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
 //   Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
//        { Component: Component.Darkmode() },  // 2026-02-18 - Disabled dark mode toggle (light-only blog)
      ],
    }),
//    Component.Explorer(),
//	Component.RecentNotes({ title: "Latest", limit: 5 }),
    Component.DesktopOnly(Component.RecentNotes({ title: "Latest", limit: 5 })),
  ],
  right: [],
}