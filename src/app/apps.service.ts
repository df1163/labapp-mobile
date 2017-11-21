/**
 * Created by alex on 11/11/2017.
 */
export class appsService {
    getApps():object[] {
        return Array.from({length: 5}, (v,i) => i).map(index => {
            return {
                image: '../assets/imgs/appImage' + index + '.png',
                title: `高中光学${index}-仿真物理实验室`,
                period: '初中',
                downTotal: index
            }
        });
    }

    getDesignatedApps(n1: number, n2:number):object[] {
        return Array.of(n1, n2).map(index => {
            return {
                image: '../assets/imgs/appImage' + index + '.png',
                title: `高中光学${index}-仿真物理实验室`,
                period: '初中',
                downTotal: index
            }
        });
    }

    getDefaultNumberApps(n1: number, n2?: number, n3: number = 13):object[]{
        return Array.of(n1, n2, n3).map(index => {
            return {
                image: '../assets/imgs/appImage' + index + '.png',
                title: `高中光学${index}-仿真物理实验室`,
                period: '初中',
                downTotal: index
            }
        });
    }

    getUnknownNumberApps(n1:number, ...restOfNumber: any[]):object[] {
        return Array.of(n1, ...restOfNumber).map(index => {
            return {
                image: '../assets/imgs/appImage' + index + '.png',
                title: `高中光学${index}-仿真物理实验室`,
                period: '初中',
                downTotal: index
            }
        });
    }

    getAppsSlow():Promise<Array<object>> {
        return new Promise((res) => {
            setTimeout(() => {
                res(Array.from({length: 17}, (v, k) => k).map(index => {
                    return {
                        image:'../assets/imgs/appImage' + index + '.png',
                        title: `高中光学-${index}仿真物理实验室`,
                        period: '高中',
                        downTotal: index
                    }
                }))
            }, 500);
        });
    }
}