const styles = getComputedStyle(document.documentElement);
const maxRadius = 200;
const minRadius = 35;

const colorArray = [
    styles.getPropertyValue('--red'),
    styles.getPropertyValue('--orange'),
    styles.getPropertyValue('--green-3'),
    styles.getPropertyValue('--purple-1'),
    styles.getPropertyValue('--blue-1'),
    styles.getPropertyValue('--blue-3'),
    styles.getPropertyValue('--green-1'),
    styles.getPropertyValue('--yellow')
]

const calculateSectors = () => {
    const minSectors = 1;
    const maxSectors = 8;
    const numberOfSectors = Math.floor(Math.random() * (maxSectors - minSectors + 1)) + minSectors;
    return numberOfSectors;
}

export const generateSectorValues = () => {
    const sectorsCount = calculateSectors();
    const sectorValues = [];
    let remainingFraction = 1;

    for (let i = 0; i < sectorsCount - 1; i++) {
        const maxFraction = Math.random() * remainingFraction;
        const fraction = Math.random() * maxFraction;
        sectorValues.push({
            fraction,
            radius: Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius,
            color: colorArray[i]
        });
        remainingFraction = remainingFraction - fraction;
    }

    // Последний сектор для обеспечения общей суммы фракций равной 1
    sectorValues.push({
        fraction: remainingFraction,
        radius: Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius,
        color: colorArray[sectorsCount - 1]
    });

    return sectorValues;
}





