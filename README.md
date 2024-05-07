# Tauri Plugin serialport

A tauri plugin developed based on Serialport.

# Installation

## RUST

`src-tauri/Cargo.toml`

```toml
tauri-plugin-serialport-v1 = "0.1.0"
```

Use in `src-tauri/src/main.rs`:

```RUST
use tauri_plugin_serialport_v1;

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_serialport_v1::init())
        .build()
        .run();
}
```

## WEBVIEW

npm install @kuyoonjo/tauri-plugin-serialport-api@0.1.0

Use within your JS/TS:

```JS
import { Serialport } from 'tauri-plugin-serialport-api';
```

# API
## SerialportInfo
```ts
export interface SerialportInfo {
  path: string;
  info?: {
    /** Vendor ID */
    vid: number;
    /** Product ID */
    pid: number;
    /** Serial number (arbitrary string) */
    serialNumber?: string;
    /** Manufacturer (arbitrary string) */
    manufacturer?: string;
    /** Product name (arbitrary string) */
    product?: string;
  };
}
```

## SerialportOptions
```ts
export interface SerialportOptions {
    path: string;
    baudRate: number;
    encoding?: string;
    dataBits?: 5 | 6 | 7 | 8;
    flowControl?: null | 'Software' | 'Hardware';
    parity?: null | 'Odd' | 'Even';
    stopBits?: 1 | 2;
    timeout?: number;
    size?: number;
    [key: string]: any;
}
```

## Serialport
```ts
declare class Serialport {
  isOpen: boolean;
  encoding: string;
  size: number;
  constructor(options: SerialportOptions);
  static available_ports(): Promise<SerialportInfo[]>;
  static forceClose(path: string): Promise<void>;
  static closeAll(): Promise<void>;
  open(): Promise<void>;
  close(): Promise<void>;
  write(value: string): Promise<number>;
  writeBinary(value: Uint8Array | number[]): Promise<number>;
  read(options?: ReadOptions): Promise<void>;
  cancelRead(): Promise<void>;
  listen(fn: (data: string) => void, decodeAsString?: true): Promise<void>;
  listen(fn: (data: number[]) => void, decodeAsString: false): Promise<void>;
  cancelListen(): Promise<void>;
  setBaudRate(value: number, maxReopenTries?: number, tryItv?: number): Promise<void>;
  setPath(value: string, maxReopenTries?: number, tryItv?: number): Promise<void>;
  change(options: {
    path?: string;
    baudRate?: number;
}, maxReopenTries?: number, tryItv?: number): Promise<void>;
}
```