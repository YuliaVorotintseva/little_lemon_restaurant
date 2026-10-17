import '@testing-library/jest-dom';

import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

jest.mock('uuid', () => ({
  v4: () => `mocked-uuid-${Math.random().toString(36).substring(2, 9)}`,
}));