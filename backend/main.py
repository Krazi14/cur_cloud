from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Marroquinería API", version="1.0.0")

# Habilitar CORS para conectar con React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Product(BaseModel):
    id: int
    name: str
    category: str
    price: float
    image: str
    badge: Optional[str] = None


class OrderItem(BaseModel):
    product_id: int
    quantity: int


class OrderCreate(BaseModel):
    full_name: str
    email: str
    phone: str
    address: str
    city: str
    notes: Optional[str] = None
    items: List[OrderItem]


def img(photo_id: str) -> str:
    return f"https://images.unsplash.com/{photo_id}?auto=format&fit=crop&w=900&q=80"


PRODUCTS = [
    {"id": 1, "name": "Cartera Aura", "category": "carteras", "price": 129.00, "image": img("photo-1548036328-c9fa89d128fa"), "badge": "Nueva"},
    {"id": 2, "name": "Cartera Siena", "category": "carteras", "price": 159.00, "image": img("photo-1584917865442-de89df76afd3"), "badge": "Best seller"},
    {"id": 3, "name": "Mochila Nómada", "category": "mochilas", "price": 149.00, "image": img("photo-1553062407-98eeb64c6a62"), "badge": "Esencial"},
    {"id": 4, "name": "Mochila Urbana", "category": "mochilas", "price": 169.00, "image": img("photo-1590874103328-eac38a683ce7")},
    {"id": 5, "name": "Botín Terra", "category": "calzado", "price": 169.00, "image": img("photo-1543163521-1bf539c55dd2"), "badge": "Unisex"},
    {"id": 6, "name": "Calzado Atelier", "category": "calzado", "price": 139.00, "image": img("photo-1549298916-b41d501d3772")},
    {"id": 7, "name": "Correa Heritage", "category": "correas", "price": 49.00, "image": img("photo-1596755094514-f87e34085b2c")},
    {"id": 8, "name": "Correa Daily", "category": "correas", "price": 45.00, "image": img("photo-1614179689702-355944cd0918")},
    {"id": 9, "name": "Billetera Origen", "category": "billeteras", "price": 59.00, "image": img("photo-1627123424574-724758594e93"), "badge": "Nueva"},
    {"id": 10, "name": "Billetera Slim", "category": "billeteras", "price": 54.00, "image": img("photo-1611652022419-a9419f74343d")},
    {"id": 11, "name": "Morral Viajero", "category": "morrales", "price": 119.00, "image": img("photo-1560343090-f0409e92791a")},
    {"id": 12, "name": "Monedero Luna", "category": "morrales", "price": 39.00, "image": img("photo-1524805444758-089113d48a6d")},
]


@app.get("/api/products", response_model=List[Product])
def get_products(category: Optional[str] = None):
    if category and category != "todos":
        return [p for p in PRODUCTS if p["category"] == category]
    return PRODUCTS


@app.post("/api/orders")
def create_order(order: OrderCreate):
    total = sum(
        next((p["price"] * item.quantity for p in PRODUCTS if p["id"] == item.product_id), 0)
        for item in order.items
    )
    return {
        "status": "success",
        "message": "Pedido registrado correctamente.",
        "order_summary": {
            "client": order.full_name,
            "email": order.email,
            "city": order.city,
            "total": round(total, 2),
        },
    }
