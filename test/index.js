/* global describe, it */
import assert from 'assert';

import {
  merge,
  formatError
} from '../src';

describe('Utilities', function () {
  describe('merge', function () {
    it('should merge', function () {
      let data1 = { a: 5 };
      let data2 = { a: 15, b: 10 };

      let result = merge(data1, data2);

      assert.deepEqual(result, {
        a: data1.a,
        b: data2.b
      });
    });
  });

  describe('formatError', function () {
    it('should return object', function () {
      let str = 'err1234';

      let data = formatError(str);

      assert.deepEqual(data, {
        error: str
      });
    });

    it('should convert Error instance to object', function () {
      let str = 'err1234';

      let err = new Error(str);

      let data = formatError(err);

      assert.deepEqual(data, {
        error: str
      });

      let err2 = new Error();

      let data2 = formatError(err2);

      assert.deepEqual(data2, {
        error: 'Error'
      });
    });

    it('should not do anything if data has an error variable', function () {
      let _data = {
        error: 'something'
      };

      let data = formatError(_data);

      assert.deepEqual(data, _data);
    });
  });
});
