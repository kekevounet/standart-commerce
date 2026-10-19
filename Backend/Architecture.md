# Architecture Backend Laravel — Marketplace

## 1. Objectif du projet

Construire un backend REST API avec Laravel pour alimenter une marketplace e-commerce composée de :

* Administration
* Gestion de la boutique
* Gestion des administrateurs
* Authentification
* Produits
* Catégories et sous-catégories
* Clients
* Commandes
* Promotions
* Paiements
* Livraison
* Notifications
* Statistiques
* Paramètres
* Sécurité
* Sessions actives
* Authentification à deux facteurs

Le frontend React communiquera exclusivement avec l'API Laravel.

---

# 2. Architecture générale

```text
                    FRONTEND
                 React + TypeScript
                        |
                        | HTTP / JSON
                        | Authorization: Bearer TOKEN
                        v
              ┌─────────────────────┐
              │    Laravel API      │
              │                     │
              │ Routes API          │
              │ Controllers         │
              │ Form Requests       │
              │ Services            │
              │ Policies            │
              │ Resources           │
              └──────────┬──────────┘
                         |
             ┌───────────┼───────────┐
             |           |           |
             v           v           v
         MySQL       Storage      Queue/Jobs
        Database     Images       Notifications
```

---

# 3. Technologies

## Backend

```text
Laravel
PHP
MySQL
Laravel Sanctum
Laravel Storage
Laravel Notifications
Laravel Queues
Laravel Scheduler
```

## Frontend

```text
React
TypeScript
Vite
Tailwind CSS
Axios
React Router
```

---

# 4. Structure Laravel

```text
backend/
│
├── app/
│   ├── Console/
│   │
│   ├── Exceptions/
│   │
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── Api/
│   │   │       ├── AuthController.php
│   │   │       ├── DashboardController.php
│   │   │       ├── ShopController.php
│   │   │       ├── ProductController.php
│   │   │       ├── CategoryController.php
│   │   │       ├── OrderController.php
│   │   │       ├── CustomerController.php
│   │   │       ├── PromotionController.php
│   │   │       ├── PaymentController.php
│   │   │       ├── DeliveryController.php
│   │   │       ├── NotificationController.php
│   │   │       ├── StatisticsController.php
│   │   │       ├── SettingsController.php
│   │   │       ├── SessionController.php
│   │   │       └── TwoFactorController.php
│   │   │
│   │   ├── Requests/
│   │   │   ├── Auth/
│   │   │   ├── Product/
│   │   │   ├── Category/
│   │   │   ├── Order/
│   │   │   ├── Customer/
│   │   │   ├── Promotion/
│   │   │   ├── Shop/
│   │   │   └── Settings/
│   │   │
│   │   ├── Resources/
│   │   │   ├── UserResource.php
│   │   │   ├── ProductResource.php
│   │   │   ├── CategoryResource.php
│   │   │   ├── OrderResource.php
│   │   │   ├── CustomerResource.php
│   │   │   └── ...
│   │   │
│   │   └── Middleware/
│   │
│   ├── Models/
│   │   ├── User.php
│   │   ├── Shop.php
│   │   ├── Product.php
│   │   ├── Category.php
│   │   ├── Subcategory.php
│   │   ├── Customer.php
│   │   ├── Order.php
│   │   ├── OrderItem.php
│   │   ├── Promotion.php
│   │   ├── Payment.php
│   │   ├── DeliveryMethod.php
│   │   ├── Notification.php
│   │   ├── ActiveSession.php
│   │   └── TwoFactorAuthentication.php
│   │
│   ├── Services/
│   │   ├── AuthService.php
│   │   ├── ProductService.php
│   │   ├── CategoryService.php
│   │   ├── OrderService.php
│   │   ├── PromotionService.php
│   │   ├── PaymentService.php
│   │   ├── DeliveryService.php
│   │   ├── NotificationService.php
│   │   ├── StatisticsService.php
│   │   └── SettingsService.php
│   │
│   ├── Policies/
│   │   ├── ProductPolicy.php
│   │   ├── CategoryPolicy.php
│   │   ├── OrderPolicy.php
│   │   └── UserPolicy.php
│   │
│   ├── Jobs/
│   │   └── SendNotificationJob.php
│   │
│   └── Notifications/
│       ├── NewOrderNotification.php
│       ├── NewCustomerNotification.php
│       └── LowStockNotification.php
│
├── database/
│   ├── migrations/
│   ├── seeders/
│   └── factories/
│
├── routes/
│   ├── api.php
│   └── web.php
│
├── storage/
│   └── app/
│       └── public/
│           ├── shops/
│           └── products/
│
├── config/
│
├── resources/
│
├── tests/
│   ├── Feature/
│   └── Unit/
│
├── .env
├── composer.json
└── README.md
```

---

# 5. Base de données

## users

Utilisateurs administrateurs.

```text
users
------
id
first_name
last_name
email
phone
password
role
two_factor_enabled
created_at
updated_at
```

Exemple de rôle :

```text
super_admin
admin
```

---

# 6. shops

Informations générales de la boutique.

```text
shops
------
id
name
description
logo
email
phone
address
currency
language
created_at
updated_at
```

Exemple :

```text
name        = "Shop."
description = "Votre marketplace en ligne..."
currency    = "MGA"
language    = "fr"
```

---

# 7. categories

Une catégorie peut posséder plusieurs sous-catégories.

```text
categories
----------
id
name
slug
description
created_at
updated_at
```

Relation :

```text
Category
   |
   | 1:N
   v
Subcategory
```

---

# 8. subcategories

```text
subcategories
-------------
id
name
slug
description
categorie_id
created_at
updated_at
```

Relation :

```text
Category hasMany Subcategory

Subcategory belongsTo Category
```

---

# 9. products

```text
products
--------
id
name
introduction
description
price
stock_quantity
image
status
subcategory_id
created_at
updated_at
```

`status` :

```text
draft
active
inactive
```

Exemple :

```text
Nom :
Nike Air Max

Introduction :
Chaussures sportives confortables.

Description :
Chaussures adaptées au sport...

Prix :
250000

Stock :
15

Sous-catégorie :
Chaussures
```

---

# 10. customers

Les clients de la marketplace sont séparés des administrateurs.

```text
customers
---------
id
first_name
last_name
email
phone
password
address
city
status
created_at
updated_at
```

---

# 11. Commande

```text
orders
------
id
customer_id
order_number
status
subtotal
discount
delivery_fee
total
payment_status
delivery_status
shipping_address
created_at
updated_at
```

Statut de commande :

```text
pending
confirmed
processing
shipped
delivered
cancelled
```

---

# 12. Commande_items

Une commande contient plusieurs produits.

```text
order_items
-----------
id
order_id
product_id
quantity
unit_price
total
created_at
updated_at
```

Relation :

```text
Order
  |
  | hasMany
  v
OrderItem
  |
  | belongsTo
  v
Product
```

Important :

`unit_price` doit être sauvegardé dans `order_items`.

Ainsi, si le prix du produit change plus tard, l'ancienne commande conserve son prix historique.

---

# 13. promotions

```text
promotions
----------
id
name
code
type
value
start_date
end_date
minimum_amount
usage_limit
used_count
status
created_at
updated_at
```

Types :

```text
percentage
fixed
```

Exemple :

```text
Code : WELCOME10

Type : percentage

Value : 10

Minimum : 100000 Ar
```

---

# 14. payments

Le backend doit pouvoir gérer plusieurs méthodes.

```text
payments
--------
id
order_id
method
amount
status
transaction_reference
paid_at
created_at
updated_at
```

Méthodes :

```text
card
mobile_money
cash_on_delivery
bank_transfer
```

Pour Mobile Money :

```text
mvola
orange_money
airtel_money
```

---

# 15. delivery_methods

```text
delivery_methods
----------------
id
name
description
price
estimated_min_days
estimated_max_days
status
created_at
updated_at
```

Exemple :

```text
Livraison standard
2 à 5 jours

Livraison express
24 à 48 heures

Retrait en boutique
```

---

# 16. notifications

```text
notifications
-------------
id
user_id
type
title
message
read_at
created_at
updated_at
```

Notifications possibles :

```text
Nouvelle commande
Nouveau client
Stock faible
Promotion
```

---

# 17. active_sessions

Pour afficher :

> Chrome · Windows
> Antananarivo · Session actuelle

```text
active_sessions
---------------
id
user_id
token_id
ip_address
user_agent
device
browser
platform
location
last_activity_at
created_at
updated_at
```

Lorsqu'un utilisateur se déconnecte d'un appareil :

```text
DELETE /api/admin/sessions/{id}
```

---

# 18. two_factor_authentications

```text
two_factor_authentications
--------------------------
id
user_id
secret
enabled
confirmed_at
created_at
updated_at
```

Pour une vraie implémentation, utiliser un mécanisme TOTP compatible avec une application comme Google Authenticator.

---

# 19. Settings / Apparence

Les paramètres de la boutique peuvent être regroupés.

```text
shop_settings
-------------
id
shop_id
theme
primary_color
navigation_name
created_at
updated_at
```

Exemple :

```text
theme = light
primary_color = #000000
navigation_name = "shop."
```

---

# 20. Relations principales

```text
User
 │
 ├── hasMany ActiveSession
 ├── hasMany Notification
 └── hasOne TwoFactorAuthentication


Category
 │
 └── hasMany Subcategory
          │
          └── hasMany Product


Customer
 │
 └── hasMany Order
          │
          └── hasMany OrderItem
                       │
                       └── belongsTo Product


Order
 │
 ├── hasMany OrderItem
 ├── hasOne Payment
 └── belongsTo Customer


Shop
 │
 └── hasOne ShopSetting
```

---

# 21. API Authentication

Utiliser **Laravel Sanctum**.

## Login

```http
POST /api/auth/login
```

Request :

```json
{
    "email": "admin@shop.com",
    "password": "password"
}
```

Response :

```json
{
    "message": "Connexion réussie",
    "user": {},
    "token": "..."
}
```

---

## Logout

```http
POST /api/auth/logout
```

Header :

```http
Authorization: Bearer TOKEN
```

---

## Current user

```http
GET /api/auth/me
```

---

# 22. Routes API

## Authentication

```text
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
```

---

# 23. Dashboard

```text
GET /api/admin/dashboard
```

Response possible :

```json
{
    "sales": 12500000,
    "orders": 124,
    "customers": 86,
    "products": 54,
    "low_stock_products": 7
}
```

Le frontend pourra utiliser ces données pour construire les cartes du dashboard.

---

# 24. Boutique

```text
GET    /api/admin/shop
PUT    /api/admin/shop
POST   /api/admin/shop/logo
```

Permet de gérer :

```text
Logo
Nom
Description
Email
Téléphone
Adresse
Devise
Langue
```

---

# 25. Produits

```text
GET    /api/admin/products
POST   /api/admin/products
GET    /api/admin/products/{id}
PUT    /api/admin/products/{id}
DELETE /api/admin/products/{id}
POST   /api/admin/products/{id}/image
PATCH  /api/admin/products/{id}/status
```

Filtres :

```text
GET /api/admin/products?search=iphone
GET /api/admin/products?category=1
GET /api/admin/products?status=active
GET /api/admin/products?low_stock=true
```

---

# 26. Catégories

```text
GET    /api/admin/categories
POST   /api/admin/categories
GET    /api/admin/categories/{id}
PUT    /api/admin/categories/{id}
DELETE /api/admin/categories/{id}
```

Sous-catégories :

```text
POST   /api/admin/categories/{category}/subcategories
PUT    /api/admin/subcategories/{id}
DELETE /api/admin/subcategories/{id}
```

---

# 27. Clients

```text
GET    /api/admin/customers
GET    /api/admin/customers/{id}
PUT    /api/admin/customers/{id}
DELETE /api/admin/customers/{id}
PATCH  /api/admin/customers/{id}/status
```

---

# 28. Commandes

```text
GET   /api/admin/orders
GET   /api/admin/orders/{id}
PATCH /api/admin/orders/{id}/status
PATCH /api/admin/orders/{id}/payment
PATCH /api/admin/orders/{id}/delivery
```

Filtres :

```text
?status=pending
?payment_status=paid
?delivery_status=shipped
?date_from=2026-09-01
?date_to=2026-09-30
```

---

# 29. Promotions

```text
GET    /api/admin/promotions
POST   /api/admin/promotions
GET    /api/admin/promotions/{id}
PUT    /api/admin/promotions/{id}
DELETE /api/admin/promotions/{id}
PATCH  /api/admin/promotions/{id}/status
```

---

# 30. Paiements

```text
GET   /api/admin/payment-methods
POST  /api/admin/payment-methods
PUT   /api/admin/payment-methods/{id}
PATCH /api/admin/payment-methods/{id}/status
```

Au début, tu peux implémenter uniquement la configuration des méthodes.

L'intégration réelle avec MVola, Orange Money, Airtel Money ou une passerelle bancaire pourra être ajoutée ensuite.

---

# 31. Livraison

```text
GET   /api/admin/delivery-methods
POST  /api/admin/delivery-methods
PUT   /api/admin/delivery-methods/{id}
DELETE /api/admin/delivery-methods/{id}
PATCH /api/admin/delivery-methods/{id}/status
```

---

# 32. Notifications

```text
GET   /api/admin/notifications
PATCH /api/admin/notifications/{id}/read
PATCH /api/admin/notifications/read-all
DELETE /api/admin/notifications/{id}
```

---

# 33. Sessions

```text
GET    /api/admin/sessions
DELETE /api/admin/sessions/{id}
DELETE /api/admin/sessions
```

La dernière route peut servir à :

```text
Déconnecter tous les autres appareils
```

---

# 34. Sécurité

```text
GET   /api/admin/security
PUT   /api/admin/security/password
POST  /api/admin/security/2fa/enable
POST  /api/admin/security/2fa/confirm
POST  /api/admin/security/2fa/disable
```

Pour modifier le mot de passe :

```json
{
    "current_password": "...",
    "new_password": "...",
    "new_password_confirmation": "..."
}
```

Le backend doit vérifier le mot de passe actuel avant de permettre la modification.

---

# 35. Paramètres

Une route globale peut gérer les paramètres de l'administration :

```text
GET /api/admin/settings
```

Elle peut retourner :

```json
{
    "shop": {},
    "admin": {},
    "notifications": {},
    "payments": {},
    "delivery": {},
    "appearance": {}
}
```

Mais les modifications peuvent rester séparées :

```text
PUT /api/admin/shop
PUT /api/admin/settings/notifications
PUT /api/admin/settings/payments
PUT /api/admin/settings/delivery
PUT /api/admin/settings/appearance
```

---

# 36. Validation

Ne jamais mettre toute la validation directement dans les Controllers.

Utiliser les Form Requests.

Exemple :

```text
StoreProductRequest.php
UpdateProductRequest.php
StoreCategoryRequest.php
UpdateCategoryRequest.php
LoginRequest.php
UpdatePasswordRequest.php
UpdateShopRequest.php
```

Exemple de validation produit :

```php
return [
    'name' => ['required', 'string', 'max:255'],
    'introduction' => ['required', 'string', 'max:500'],
    'description' => ['required', 'string'],
    'price' => ['required', 'numeric', 'min:0'],
    'stock_quantity' => ['required', 'integer', 'min:0'],
    'subcategory_id' => ['required', 'exists:subcategories,id'],
    'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
];
```

---

# 37. Resources

Ne pas retourner directement les modèles Eloquent dans toutes les réponses.

Utiliser :

```text
ProductResource
CategoryResource
OrderResource
CustomerResource
UserResource
```

Exemple :

```json
{
    "id": 1,
    "name": "Produit exemple",
    "introduction": "Courte présentation",
    "price": 250000,
    "stock_quantity": 15,
    "image": "...",
    "subcategory": {
        "id": 2,
        "name": "Chaussures"
    }
}
```

Cela permet de contrôler exactement ce que le frontend reçoit.

---

# 38. Services

Les Controllers doivent rester relativement simples.

Mauvaise approche :

```php
public function store(Request $request)
{
    // 100 lignes de logique
}
```

Préférer :

```php
public function store(StoreProductRequest $request)
{
    $product = $this->productService->create(
        $request->validated()
    );

    return new ProductResource($product);
}
```

La logique métier est dans :

```text
ProductService
OrderService
PromotionService
PaymentService
```

---

# 39. Gestion des images

Les images doivent être stockées avec Laravel Storage.

```text
storage/app/public/
```

Organisation :

```text
shops/
    logo.webp

products/
    product-1.webp
    product-2.webp
```

Commande :

```bash
php artisan storage:link
```

Le frontend reçoit ensuite l'URL publique de l'image.

---

# 40. Gestion des stocks

Lorsqu'une commande est confirmée :

```text
stock actuel
     ↓
quantité commandée
     ↓
nouveau stock
```

Exemple :

```text
Stock = 20

Commande = 3

Stock final = 17
```

Il faut empêcher :

```text
Stock = 2
Commande = 5
```

Le backend doit refuser la commande.

Pour les opérations critiques de commande et de stock, utiliser une transaction DB :

```text
DB::transaction()
```

---

# 41. Stock faible

Définir par exemple :

```text
low_stock_threshold = 5
```

Si :

```text
stock_quantity <= 5
```

alors :

```text
Notification "Stock faible"
```

peut être créée.

---

# 42. Statistiques

Créer :

```text
StatisticsController
StatisticsService
```

Routes :

```text
GET /api/admin/statistics/sales
GET /api/admin/statistics/orders
GET /api/admin/statistics/products
GET /api/admin/statistics/customers
```

Exemple :

```text
GET /api/admin/statistics/sales?period=month
```

Réponse :

```json
{
    "period": "month",
    "data": [
        {
            "date": "2026-09-01",
            "amount": 500000
        },
        {
            "date": "2026-09-02",
            "amount": 750000
        }
    ]
}
```

Le frontend peut ensuite utiliser Recharts.

---

# 43. Autorisation

Utiliser Laravel Policies.

Exemple :

```text
Super administrateur
        |
        ├── gérer les administrateurs
        ├── gérer la boutique
        ├── gérer les produits
        ├── gérer les commandes
        └── gérer les paramètres


Administrateur
        |
        ├── gérer les produits
        ├── gérer les catégories
        ├── gérer les commandes
        └── consulter les clients
```

Les permissions exactes pourront être définies plus tard.

---

# 44. Format standard des réponses API

## Succès

```json
{
    "success": true,
    "message": "Produit créé avec succès",
    "data": {}
}
```

## Erreur

```json
{
    "success": false,
    "message": "Une erreur est survenue"
}
```

## Validation

```json
{
    "success": false,
    "message": "Les données sont invalides",
    "errors": {
        "name": [
            "Le nom du produit est obligatoire."
        ]
    }
}
```

---

# 45. Architecture des routes

```text
/api
│
├── auth
│   ├── login
│   ├── logout
│   ├── me
│   └── password
│
└── admin
    │
    ├── dashboard
    │
    ├── shop
    │
    ├── products
    │
    ├── categories
    │
    ├── subcategories
    │
    ├── customers
    │
    ├── orders
    │
    ├── promotions
    │
    ├── payment-methods
    │
    ├── delivery-methods
    │
    ├── notifications
    │
    ├── statistics
    │
    ├── sessions
    │
    ├── security
    │
    └── settings
```

Toutes les routes `/admin` doivent être protégées par :

```text
auth:sanctum
```

---

# 46. Ordre de développement recommandé

Ne développe pas tout simultanément.

## Phase 1 — Installation

```text
Laravel
MySQL
Sanctum
CORS
Storage
```

Objectif :

```text
React
  ↓
Laravel API
  ↓
MySQL
```

---

## Phase 2 — Authentification

Créer :

```text
User
AuthController
LoginRequest
Sanctum
```

Implémenter :

```text
Login
Logout
Me
```

Tester avec Postman/Insomnia.

---

## Phase 3 — Catégories

Créer :

```text
Category
Subcategory
```

Puis :

```text
CRUD catégorie
CRUD sous-catégorie
```

Tester l'API.

---

## Phase 4 — Produits

Créer :

```text
Product
ProductController
ProductService
StoreProductRequest
UpdateProductRequest
ProductResource
```

Implémenter :

```text
CRUD
Image
Stock
Catégorie
Sous-catégorie
```

Puis connecter ton écran :

```text
/admin/produits
```

et :

```text
/admin/produits/ajouter
```

---

## Phase 5 — Boutique

Connecter :

```text
/admin/parametres
```

avec :

```text
shops
shop_settings
```

---

## Phase 6 — Clients

Créer :

```text
Customer
CustomerController
CustomerResource
```

---

## Phase 7 — Commandes

Créer :

```text
Order
OrderItem
Payment
```

Puis implémenter :

```text
création commande
calcul total
stock
statut
paiement
```

---

## Phase 8 — Promotions

Créer :

```text
Promotion
```

Puis intégrer les promotions aux commandes.

---

## Phase 9 — Livraison

Créer :

```text
DeliveryMethod
```

Puis intégrer :

```text
delivery_fee
delivery_status
```

aux commandes.

---

## Phase 10 — Notifications

Ajouter :

```text
NewOrderNotification
NewCustomerNotification
LowStockNotification
```

---

## Phase 11 — Statistiques

Créer :

```text
StatisticsService
```

et connecter les graphiques React.

---

## Phase 12 — Sécurité

Ajouter :

```text
Change password
Active sessions
2FA
Policies
Rate limiting
```

---

# 47. Architecture finale

À terme :

```text
React
│
│ Axios
│
▼
Laravel REST API
│
├── Authentication
│       └── Sanctum
│
├── Controllers
│
├── Form Requests
│
├── Resources
│
├── Services
│
├── Policies
│
├── Notifications
│
├── Jobs
│
├── Models
│
└── MySQL
        │
        ├── users
        ├── shops
        ├── shop_settings
        ├── categories
        ├── subcategories
        ├── products
        ├── customers
        ├── orders
        ├── order_items
        ├── promotions
        ├── payments
        ├── delivery_methods
        ├── notifications
        ├── active_sessions
        └── two_factor_authentications
```

# 48. Règle importante du projet

Le frontend ne doit **jamais accéder directement à MySQL**.

```text
❌ React → MySQL

❌ React → logique métier

✅ React → Laravel API → Service → Model → MySQL
```

Exemple :

```text
React
   |
   | POST /api/admin/products
   |
   v
ProductController
   |
   v
StoreProductRequest
   |
   v
ProductService
   |
   v
Product Model
   |
   v
MySQL
```

Cette séparation permettra de garder ton projet propre, sécurisé et facilement maintenable.







                         E-COMMERCE
                              │
              ┌───────────────┴────────────────┐
              │                                │
           CLIENT                            ADMIN
              │                                │
       ┌──────┴──────┐                         │
       │             │                         │
    Invité       Connecté                 Connexion
       │             │                         │
       │             ├── Historique             │
       │             │                          │
       │             └── Profil                 │
       │                                        │
       └──────────────┐                         │
                      │                         │
                 Voir produits                  │
                      │                         │
                 Ajouter panier                 │
                      │                         │
                   Commander                    │
                      │                         │
              ┌───────┴────────┐                │
              │                │                │
          user_id NULL      user_id = X         │
              │                │                │
              └───────┬────────┘                │
                      │                         │
                   Commande                     │
                                                │
                             ┌──────────────────┼──────────────┐
                             │                  │              │
                         Produits          Catégories      Sous-catégories
                             │                  │              │
                             └──────────────────┴──────────────┘
