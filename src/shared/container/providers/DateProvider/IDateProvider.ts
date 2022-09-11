
interface IDateProvider {
	comparaEmHoras(dataInicial: Date, dataFinal: Date): number;
	somaDias(data: Date, dias: number): Date;
}

export { IDateProvider }