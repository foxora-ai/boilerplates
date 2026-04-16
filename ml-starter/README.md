# ML Starter Boilerplate

PyTorch ML project with clean train/eval loop, DataLoader, and Jupyter support.

## Stack

- **PyTorch 2.5** — deep learning framework
- **scikit-learn** — datasets + preprocessing
- **NumPy / Pandas** — data manipulation
- **Matplotlib** — plotting
- **Jupyter** — notebooks for exploration
- **Python 3.12+**

## Getting Started

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Train the model
python train.py

# Launch Jupyter
jupyter notebook notebooks/
```

## Project Structure

```
src/
  models/
    mlp.py          # MLP model definition
  data/
    dataset.py      # DataLoader factory
  training/
    trainer.py      # train_epoch / eval_epoch
notebooks/          # Jupyter exploration notebooks
train.py            # Main training entry point
requirements.txt
```
