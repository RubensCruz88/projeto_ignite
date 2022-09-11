import { IDateProvider } from "../IDateProvider";

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider{
	comparaEmHoras(dataInicial: Date, dataFinal: Date): number {
		const dataInicialFormatada = dayjs(dataInicial).utc().local().format();
		const dataFinalFormatada = dayjs(dataFinal).utc().local().format();

		return dayjs(dataFinalFormatada).diff(dataInicialFormatada,"hours");
	};

	somaDias(data: Date, dias: number): Date {
		return dayjs(data).add(dias, "day").toDate();
	}

}

export { DayjsDateProvider }