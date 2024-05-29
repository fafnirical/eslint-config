import type { PackageJson } from 'type-fest';

import { readFileSync } from 'fs';
import { packageUpSync } from 'package-up';

export function getDependencies(): string[] {
  const packageJsonPath = packageUpSync();

  if (!packageJsonPath) {
    throw new Error('Could not find package.json');
  }

  const packageJson = JSON.parse(
    readFileSync(packageJsonPath, 'utf-8'),
  ) as PackageJson;

  return [
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.devDependencies ?? {}),
  ];
}

export function hasDependency(
  allDependencies: string[],
  dependency: string | string[],
): boolean {
  if (Array.isArray(dependency)) {
    return dependency.some((dep) => allDependencies.includes(dep));
  }
  return allDependencies.includes(dependency);
}
