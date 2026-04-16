import torch
from torch.utils.data import DataLoader, TensorDataset
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import numpy as np

def get_dataloaders(
    n_samples: int = 1000,
    n_features: int = 20,
    batch_size: int = 32,
    test_size: float = 0.2,
):
    X, y = make_classification(
        n_samples=n_samples,
        n_features=n_features,
        n_informative=10,
        random_state=42,
    )

    X_train, X_val, y_train, y_val = train_test_split(
        X, y, test_size=test_size, random_state=42
    )

    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_val = scaler.transform(X_val)

    to_tensor = lambda a, b: TensorDataset(
        torch.tensor(a, dtype=torch.float32),
        torch.tensor(b, dtype=torch.long),
    )

    train_loader = DataLoader(to_tensor(X_train, y_train), batch_size=batch_size, shuffle=True)
    val_loader = DataLoader(to_tensor(X_val, y_val), batch_size=batch_size)

    return train_loader, val_loader, n_features
