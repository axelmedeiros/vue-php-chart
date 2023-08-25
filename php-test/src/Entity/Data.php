<?php

namespace App\Entity;
use App\Repository\DataRepository;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

#[ORM\Entity(repositoryClass: DataRepository::class)]
#[ORM\Table(name: "Data")]
class Data implements JsonSerializable
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private int $id;

    public function __construct(
        #[ORM\Column]
        private int $value,
        #[ORM\Column]
        private int $year
    ) {
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValue(): int
    {
        return $this->value;
    }

    public function getYear(): int
    {
        return $this->year;
    }

    public function jsonSerialize(): mixed
    {
        return array(
            'id' => $this->id,
            'value' => $this->value,
            'year' => $this->year
        );
    }
}