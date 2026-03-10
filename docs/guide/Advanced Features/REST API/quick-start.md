---
title: Quick Start
permalink: /guide/rest-api/quick-start
sidebarSort: 100
---

# Quick Start

## What is the REST API?

The REST API allows you to access and manipulate spreadsheet data using the HTTP protocol.
For example, you can retrieve data from a spreadsheet or update spreadsheet content through the REST API.

It also supports AI clients like Claude, which can call the REST API by adding the `obsidian-sheet-plus-mcp-server`.

---
::: video youtube
CHc6i6FEtxQ
:::

## How to Use

### Calling the REST API via Claude

You can also use Claude to call the REST API for automation.

1. Open the **Claude Desktop** application
2. Open the **Settings** menu
3. Go to the **Developer** tab in the settings page
4. Click **Config** to configure the MCP Server
5. In the REST API management page, click **Copy MCP Server Config**, then paste the configuration into the config file
6. Restart Claude Desktop. You should see that the configuration has taken effect in the chat interface
7. In the chat, enter the data you want to insert — Claude will automatically call the REST API to insert it
8. The first time you use it, you’ll need to approve the MCP Server request. Click **Allow** to continue
