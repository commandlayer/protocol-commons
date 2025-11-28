# Security & Provenance — Protocol-Commons

This file defines ownership, disclosure rules, version integrity,
and cryptographic provenance for the Commons.

---

## Ownership & Contact

- **Owner:** commandlayer.eth  
- **Security Contact:** dev@commandlayer.org  
- **PGP Fingerprint:** 5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A  

---

## Vulnerability Disclosure

Report security issues privately:

 **Email: dev@commandlayer.org**
 
 **Use PGP for sensitive reports**

We will:
- Acknowledge valid issues within **72 hours**
- Provide mitigation plan within **10 business days**

---

## Provenance

### Current Release: v1.0.0

- **Schemas CID:** `bafybeieoynknzalaojwpzjzjy77kpnfe4kla5io7jbfnmyu7w7vyvuljpq`
- Integrity: via `checksums.txt` (SHA-256)  
- All schemas validated under strict mode CI

### Any change requires:
- New version directory
- New CID
- Updated checksums
- Logged in `RESOLUTION.md`

---

## ENS TXT Responsibilities

Commons controls ONLY:
```
cl.verb
cl.version
cl.schema.request
cl.schema.receipt
cl.cid.schemas
cl.schemas.mirror.ipfs
```

Updates MUST be signed + logged.

---

## Immutability Guarantee

Once published:
- No schema changes in-place  
- No silent mutability  
- Breaks require new version

---

Status: **Security-Critical, Stable**













