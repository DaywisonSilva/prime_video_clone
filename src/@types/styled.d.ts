import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        backgroundColor: string
        tabBarColor: string
        appChipColor: string
    }
}