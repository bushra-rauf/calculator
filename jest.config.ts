
import type {Config} from 'jest';
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
  })

const config: Config = {
    clearMocks: true,
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    setupFilesAfterEnv:["<rootDiv/jest.setup.ts>"],
}

  export default createJestConfig(config)