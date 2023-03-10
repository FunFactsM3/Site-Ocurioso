import "styled-components";

declare module "styled-components" {
  export interface DefaultThemes {
    title: string,
    color: {
      primaryCyan: string;
      primaryYellow: string,
      primaryRed: string,
      primaryGreen: string,
      primaryGreyLight: string,
      primaryGreyMedium: string,
      primaryGreyIcon: string,
      primaryGreyDark: string,

      backgroudnColorTitle: string,

      backgroundColorModal: string,
      backgroundColorInputs: string;
      backgroundColorWrappper: string;
      
      stroke: string,
      secondaryyellow: string,
      secondarybuttonhovergreen: string,
      secondarybuttonhoverred: string,
    },
    fonts:{
      primaryFont: string,
    }
  }
}