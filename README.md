# Mustache-Bun
>  mustache.js - Logic-less {{mustache}} templates with JavaScript

<p align="center"><a href="https://github.com/sponsors/LuigiColantuono"><img src="https://img.shields.io/github/sponsors/LuigiColantuono?style=social"></a> <a href="https://paypal.me/l0g4n7"><img src="https://img.shields.io/badge/💖-Support-ff69b4"></a> <img src="https://img.shields.io/npm/v/mustache-bun"> <img src="https://img.shields.io/npm/dm/mustache-bun?label=downloads"> <img src="https://img.shields.io/npm/l/mustache-bun"> <img src="https://img.shields.io/github/repo-size/LuigiColantuono/Mustache-Bun"> <a href="https://github.com/LuigiColantuono/Buncord-Transcript"><img src="https://img.shields.io/badge/Bun-Networking-black?logo=bun"></a></p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/70e8758e-f363-478a-a013-fd46ca3cf3ec" alt="Buncord Logo" width="180"/>
</div>
<br>

**A high-performance, bulk refactor of the legendary [mustache.js](https://github.com/janl/mustache.js), re-engineered specifically for the Bun runtime.**

Stop carrying the weight of 2015. **mustache-bun** is a stripped-down, pure ESM version that purges a decade of legacy bloat to deliver the fastest string templating experience on Bun.

### Why this refactor?

*   **Bun-Native & Node-Free:** Completely removed the UMD wrapper and legacy Node.js dependencies. No `ws`, no `http`, no emulated layers.
*   **High-Speed Raw Rendering:** Optimized for speed by removing HTML escaping overhead. It serves your data raw, exactly as you need it for high-frequency tasks like Discord transcripts.
*   **Zero-Dependency Supply Chain:** Purgated 300MB+ of `devDependencies` (Puppeteer, Mocha, etc.) from the source. The repo is now clean, safe, and lightning-fast to install.

### 📦 Bundle Size Comparison

| Package | Unpacked Size | Dependencies | Total Install |
| :--- | :--- | :--- | :--- |
| **mustache** (official) | ~114 kB | Legacy Bloat | ~114 kB |
| **mustache-bun**  | **~24.1 kB** | **NONE** | **~24.1 kB** |

**~79% smaller than the original!**

### Installation

```bash
bun add mustache-bun
```

### Documentation & Credits

> Original logic and architecture by **Jan Lehnardt (janl)**. For full usage instructions, refer to the [official documentation](https://github.com/janl/mustache.js).
> Refactored, optimized, and maintained for the **Bun** ecosystem by **Luigi Colantuono**.

