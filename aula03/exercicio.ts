function somar(a: number, b: number): number
{
    return a + b;
}

console.log(somar(5, 10));

function oi(nome: string, acenoPadrao?: string): string
{
    if (acenoPadrao === undefined)
    {
        acenoPadrao = "Olá";
    }

    return acenoPadrao + ", " + nome + "!";
}

console.log(oi("Yuji"));

function somarTudo(...numeros: number): number
{
    return numeros.reduce((total, num) => total + num, 0);
}
console.log(somarTudo(1, 2, 3, 4));