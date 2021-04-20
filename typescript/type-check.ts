export interface Padder {
    getPaddingString(): string;
}

export class SpaceRepeatingPadder implements Padder {
    public constructor(private numSpaces: number) { }
    public getPaddingString(): string {
        return Array(this.numSpaces + 1).join(" ");
    }
}

export class StringPadder implements Padder {
    public constructor(private value: string) { }
    public getPaddingString(): string {
        return this.value;
    }
}

export function getRandomPadder(): SpaceRepeatingPadder | StringPadder {
    return Math.random() < 0.5
        ? new SpaceRepeatingPadder(4)
        : new StringPadder("  ");
}

let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    console.log('padder instanceof SpaceRepeatingPadder', padder);
    console.log(padder.getPaddingString());

}
if (padder instanceof StringPadder) {
    console.log('padder instanceof StringPadder', padder);
    console.log(padder.getPaddingString());
}
