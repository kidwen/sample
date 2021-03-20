import { existsSync, readdirSync, statSync } from "fs";
import { resolve, dirname, join } from "path";

const packageJsonFileName = "flex.html";

export function findFileByUp(fileName = packageJsonFileName) {
    let currentDir = process.cwd();
    while (!existsSync(resolve(currentDir, fileName))) {
        let parentDir = dirname(currentDir);
        if (parentDir === currentDir) {
            return null;
        }
        currentDir = parentDir;
    }
    return join(currentDir, fileName);
}

export function findFileByDown(fileName = packageJsonFileName) {
    let currentDir = process.cwd();
    let dirs = [currentDir];
    while (dirs.length > 0) {
        currentDir = dirs[0];
        if (existsSync(resolve(currentDir, fileName))) {
            return join(currentDir, fileName);
        }
        const files = readdirSync(currentDir);
        for (const file of files) {
            let stats = statSync(resolve(currentDir, file));
            if (stats.isDirectory() && file.charAt(0) !== ".") {
                dirs.push(resolve(currentDir, file));
            }
        }
        dirs.shift();
    }
    return null;
}

let packagePath = findFileByDown("table.html");
console.log("packagePath:", packagePath);
