# azure infra
## deploy
### main

#### create rg var
```bash
rg_name=rg-team-1-aug-dev-we
rg_name=rg-xuefeng-aug-we
```

#### deploy complete
```bash
az deployment group create --template-file main.bicep --resource-group $rg_name --parameters main.parameters.json --mode Complete
```

#### empty complete
```bash
az deployment group create --template-file empty.bicep --resource-group $rg_name --mode Complete
```

#### webapp
```bash

```