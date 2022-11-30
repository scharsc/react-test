const AllLengthUnits = ["mm", "cm", "m", "in", "ft", "yd", "in US", "ft US", "yd US"] as const;
export type LengthUnit = (typeof AllLengthUnits)[number];

const mapLengthUnitToScaleFactor: Map<LengthUnit, number> = new Map( [
    [ "mm", 0.001 ],
    ["m", 1.0],
    //[ "pc", 2.344] /* illigal */
    ]
 )

const mapLengthUnitToLocalizationKey: Map<LengthUnit, string> =new Map( [
    ["mm", "UNIT_MM"],
    ["m", "UNIT_M"]
]);

export const scaleToMeter = (sourceUnit: LengthUnit) => mapLengthUnitToScaleFactor.get( sourceUnit )!;
export const lengthUnitTranslationKey = (sourceUnit: LengthUnit) => mapLengthUnitToLocalizationKey.get( sourceUnit )!;