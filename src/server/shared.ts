/// <reference path="types.d.ts" />

namespace ts.server {
    export const ActionSet: ActionSet = "action::set";
    export const ActionInvalidate: ActionInvalidate = "action::invalidate";
    export const EventInstall: EventInstall = "event::install";

    export namespace Arguments {
        export const GlobalCacheLocation = "--globalTypingsCacheLocation";
        export const LogFile = "--logFile";
        export const EnableTelemetry = "--enableTelemetry";
    }

    export function hasArgument(argumentName: string) {
        return sys.args.indexOf(argumentName) >= 0;
    }

    export function findArgument(argumentName: string) {
        const index = sys.args.indexOf(argumentName);
        return index >= 0 && index < sys.args.length - 1
            ? sys.args[index + 1]
            : undefined;
    }
}