interface line {
    name: string;
    moves: string[];
}

interface opening {
    id: string;
    name: string;
    description: string;
    lines: line[];
};
export type { opening, line };