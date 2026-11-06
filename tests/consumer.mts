import * as api from '@lp-labs/stable-line-unique';
import { uniqueLines } from '@lp-labs/stable-line-unique';
console.log(uniqueLines(['red', 'blue', 'red']));
// @ts-expect-error invalid argument must be rejected by declarations
api.uniqueLines('lines');
