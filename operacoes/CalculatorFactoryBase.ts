import BasicCalculatorPage from "./utils/BasicCalculatorPage"
import SumPage from "./soma/SumPage"

export class CalculatorBaseFactory {
    static async soma(valor1: number, valor2: number): Promise<number> {
        await SumPage.waitForPageLoaded();

        // Clicar no botao do valor 1
        const botaoNumeroValor1 = BasicCalculatorPage.relacaoFuncaoENumero.find(objeto => objeto.numero === valor1);
        await botaoNumeroValor1.funcao();
        // Clicar no botão de soma
        await SumPage.clickSum1Button();
        // Clicar no botão do valor 2
        const botaoNumeroValor2 = BasicCalculatorPage.relacaoFuncaoENumero.find(objeto => objeto.numero === valor2);
        await botaoNumeroValor2.funcao();
        // Clicar no botao de igual
        await BasicCalculatorPage.gotoResult();

        const resultado = await BasicCalculatorPage.getResultOutput();
        const resultadoSemTexto = resultado.replace('A exibição é ', '');
        const resultadoEmNumero = Number(resultadoSemTexto);
        return resultadoEmNumero;
    }

    static async subtracao(): Promise<number> {
        return 0;
    }

    static async divisao(): Promise<number> {
        return 0;
    }

    static async multiplicacao(): Promise<number> {
        return 0;
    }
}