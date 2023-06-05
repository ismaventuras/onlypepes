import type { Config } from "jest";

export default async (): Promise<Config> => { 
    return{
        preset: 'ts-jest',
        testEnvironment: 'node',
        resetMocks: true,
        moduleDirectories: ['node_modules'],
        rootDir:'.',
    }   
}
