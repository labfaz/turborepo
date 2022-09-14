import { join } from 'path';

export const name = 'api';
export const displayName = {
  name: 'API',
  color: 'yellow',
};
export const testTimeout = 5 * 1000;
export const moduleDirectories = ['node_modules', join(__dirname, 'src')];
export const testPathIgnorePatterns = [
  '<rootDir>/dist/',
  '<rootDir>/node_modules/',
];
