declare const createServer: any;
declare type PluginOptions = {
    root: string;
    app: any;
    server: any;
    watcher: any;
};
declare const myPlugin: ({ root, app, server, watcher }: PluginOptions) => void;
