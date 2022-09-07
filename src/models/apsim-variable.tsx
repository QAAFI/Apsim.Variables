
export type ApsimVariable = {
    name?: string | null;
    description?: string | null;
    units?: string | null;
    source: string;
    nextgen?: string;
    tags?: string[];
}