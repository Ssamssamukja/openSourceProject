import { Buffer } from 'buffer';
import { Readable } from 'stream';
import { setImmediate, clearImmediate } from 'timers';

global.Buffer = Buffer;
global.ReadableStream = Readable;
global.setImmediate = setImmediate;
global.clearImmediate = clearImmediate;
