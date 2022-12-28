import { Text } from '@chakra-ui/react'

type MenuItemProps = {
    children: string
}

//React.FC<MenuItemProps> FC=functional conponent property set  
export const MenuItem: React.FC<MenuItemProps> = ({ children }) => (

    <Text fontSize="1vw" >{ children }</Text>
)
