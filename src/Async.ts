import { rejects } from 'assert';
import { resolve } from 'dns';

/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove(ms);
        }, ms);
    });
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    const result: number[] = [];

    return Promise.all([mock(100), mock(200), mock(300)]).then(function ([
        data1,
        data2,
        data3,
    ]) {
        result.push(data1);
        result.push(data2);
        result.push(data3);
        return [data1, data2, data3];
    });
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err) {
        return err.message;
    }
}
