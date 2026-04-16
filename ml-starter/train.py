import torch
import torch.nn as nn
from src.models.mlp import MLP
from src.data.dataset import get_dataloaders
from src.training.trainer import train_epoch, eval_epoch

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")
EPOCHS = 20
LR = 1e-3
HIDDEN_DIM = 128

def main():
    print(f"Training on: {DEVICE}")
    train_loader, val_loader, n_features = get_dataloaders()

    model = MLP(input_dim=n_features, hidden_dim=HIDDEN_DIM, output_dim=2).to(DEVICE)
    optimizer = torch.optim.Adam(model.parameters(), lr=LR)
    criterion = nn.CrossEntropyLoss()

    for epoch in range(1, EPOCHS + 1):
        train_loss, train_acc = train_epoch(model, train_loader, optimizer, criterion, DEVICE)
        val_loss, val_acc = eval_epoch(model, val_loader, criterion, DEVICE)
        print(
            f"Epoch {epoch:02d}/{EPOCHS} | "
            f"Train Loss: {train_loss:.4f} Acc: {train_acc:.4f} | "
            f"Val Loss: {val_loss:.4f} Acc: {val_acc:.4f}"
        )

    torch.save(model.state_dict(), "model.pt")
    print("Model saved to model.pt")

if __name__ == "__main__":
    main()
