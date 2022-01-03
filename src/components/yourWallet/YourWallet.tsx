import React, { useState } from "react"
import { Token } from "../Main"
import { Box, Tab } from "@material-ui/core"
import { TabContext, TabList, TabPanel } from "@material-ui/lab"
import { WalletBalance } from "./WalletBalance"

interface YourWalletProps {
    supportedTokens: Array<Token>
}

export const YourWallet = ({ supportedTokens }: YourWalletProps) => {

    const [tokenIndex, setTokenIndex] = useState<number>(0)

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setTokenIndex(parseInt(newValue))
    }

    return(
        <Box>
            <h1>The Wallet</h1>
            <Box>
                <TabContext value={ tokenIndex.toString() }>
                    <TabList onChange={handleChange} aria-label="stake form tabs">
                        {supportedTokens.map((token, index) => (
                            <Tab label={token.name} value={index.toString()} key={index} />
                        ))}
                    </TabList>
                    {supportedTokens.map((token, index) => (
                        <TabPanel value={index.toString()} key={index}>
                            <div>
                                <WalletBalance token={supportedTokens[tokenIndex]}></WalletBalance>
                            </div>
                        </TabPanel>
                    ))}
                </TabContext>
            </Box>
        </Box>
        
    )
}