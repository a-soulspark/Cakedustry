var cake = extendContent(MessageBlock, "cake", {})

cake.buildType = () => { var b = extendContent(MessageBlock.MessageBuild, cake, {}); b.message.append("Happy v6 Release!"); return b; };